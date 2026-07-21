const API_URL = "http://localhost:8080/api/users";



export async function getProfile(id){


    const response = await fetch(
        `${API_URL}/${id}`
    );


    if(!response.ok){

        throw new Error(
            "Erreur chargement profil"
        );

    }


    return await response.json();

}





export async function updateProfile(id, data){


    const response = await fetch(
        `${API_URL}/${id}`,
        {

            method:"PUT",

            headers:{

                "Content-Type":"application/json"

            },

            body: JSON.stringify(data)

        }
    );



    if(!response.ok){

        throw new Error(
            "Erreur modification profil"
        );

    }



    return await response.json();

}