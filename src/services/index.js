import {Programme} from '../models/programme';
import axios from 'axios';

export const getProgrammesByDate = async (year, month, day, hour) => {
    try {
        const queryResult = await globoApiCall(year, month, day);
        let result = [];
        for (let item of queryResult.data.programme.entries) {
            let programmeObj = Programme.parse({
                name: item.title,
                description: item.description,
                startDate: item.human_start_time,
                endDate: item.human_end_time,
                duration: item.duration_in_minutes,
                category: item.custom_info.Genero.Descricao,
            });

            result.push(programmeObj);
        }
        console.log(result)
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

const checkProgrammeHour = (month, day, hour) => {
    if(hour < 7) {
        // check a day before, refactor later
        if (day == 1) {
            return 31;
        }
    }
}