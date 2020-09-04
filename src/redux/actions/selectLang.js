export const selectLang = (lang) => {
    return{
        type: "LANGUAGE_SELECTED",
        payload: lang
    }
}