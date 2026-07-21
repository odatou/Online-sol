const API_URL = "http://localhost:8080/api/groupes";



export async function createGroup(group) {

    const response = await fetch(
        API_URL,
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(group)
        }
    );


    if(!response.ok){

        throw new Error("Erreur création groupe");

    }


    return await response.json();

}




export async function getGroups(){

    const response = await fetch(
        API_URL
    );


    if(!response.ok){

        throw new Error("Erreur chargement groupes");

    }


    return await response.json();

}