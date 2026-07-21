const API_URL = "http://localhost:8080/api/participations";



export async function joinGroup(
    email,
    groupeId
){


    const response = await fetch(

        `${API_URL}/join?email=${email}&groupeId=${groupeId}`,

        {
            method:"POST"
        }

    );


    if(!response.ok){

        throw new Error(
            "Erreur ajout membre"
        );

    }


    return response.json();


}







export async function deleteMember(id){


    const response = await fetch(

        `${API_URL}/${id}`,

        {
            method:"DELETE"
        }

    );



    if(!response.ok){

        throw new Error(
            "Erreur suppression membre"
        );

    }



    return response.text();


}