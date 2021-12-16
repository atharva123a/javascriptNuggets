const fetchTabs = async() =>{
    const url = "https://www.course-api.com/react-tabs-project";
    const res = await fetch(url);
    return res.json();
}

export default fetchTabs