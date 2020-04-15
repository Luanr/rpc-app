import {Programme} from '../models/programme';


export const getProgramsByDay = async (year, month, day, hour) => {
    const queryResult = await globoApiCall(year, month, day);

    let result = [];

    for (let item of queryResult.data.entries) {
        let programmeObj = Programme.parse({
            name: item.title,
            description: item.description,
            startDate: item.human_start_time,
            endDate: item.human_end_time,
            duration: item.duration_in_minutes,
            imageUrl: item.Graficos.ImagemURL,
            category: item.custom_info.Genero.Descricao,
        });
        result.push(programmeObj);
    }
    return result;
}

const globoApiCall = (year, month, day) => {
    const ID_BROADCASTER = 1337;
    const apiUrl = `https://epg-api.video.globo.com/programmes/${ID_BROADCASTER}?date=${year}-${month}-${day}`;
    return axios.get(apiURL);
}