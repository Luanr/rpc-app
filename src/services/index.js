import {Programme} from '../models/programme';
import axios from 'axios';

export const getProgrammesByDate = async (year, month, day, hour, minute) => {
    try {
        const queryResult = await globoApiCall(year, month, day);
        let result = [];
        let canAppend = false;

        for (let item of queryResult.data.programme.entries) {
            let programmeObj = Programme.parse({
                name: item.title,
                description: item.description,
                startDateH: item.human_start_time,
                startDate: item.start_time,
                endDateH: item.human_end_time,
                endDate: item.end_time,
                duration: item.duration_in_minutes,
                category: item.custom_info.Genero.Descricao,
            });

            if (isInsideDate(Date.UTC(year,month-1,day,hour,minute)/1000, programmeObj.startDate,programmeObj.endDate)) {
                canAppend = true;
            }

            if (canAppend) {
                result.push(programmeObj);
            }
        }
        return result;
    } catch(err) {
        console.log(err);
    }
}

const globoApiCall = async (year, month, day) => {
    const ID_BROADCASTER = '1337';
    const apiURL = `https://epg-api.video.globo.com/programmes/${ID_BROADCASTER}?date=${year}-${month}-${day}`;
    return await axios.get(apiURL);
}

const isInsideDate = (queryDate,startDate,endDate) => {
    return queryDate >= startDate && queryDate <= endDate;
}

const checkProgrammeHour = (month, day, hour) => {
    if(hour < 7) {
        // check a day before, refactor later
    }
}