export const getTemplate = async () => {
    const url = 'https://doki-templates-default-rtdb.firebaseio.com/templates.json'
    const res = await fetch(url);
    const data = await res.json()
    return data;
}