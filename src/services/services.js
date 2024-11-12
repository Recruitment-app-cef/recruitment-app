const BASE_URL = "http://localhost:3000"

const api = {
    verifyUser: async (userCredentials) => {
        try {
            const response = await fetch(`${BASE_URL}/auth/authUser`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(userCredentials)
            })

            if (!response.ok) {
                throw new Error("Error al autenticar al usuario")
            }

            return response.json();
        } catch (error) {
            console.error("Error en llamada al servidor: ", error)
            return null;
        }
    },

    saveRequestData: async (data) => {
        try {
            const response = await fetch(`${BASE_URL}/request/save`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data)
                })

            if (response.status == 201) {
                return response.json()
            } else {
                throw new Error("Error al almacenar el usuario")
            }
        } catch (error) {
            console.error("Error en llamada al servidor: ", error)
            return null
        }
    },

    getRequestData: async (id, cycle) => {
        try {

            const semester = cycle.split(' ').join('%20')

            const response = await fetch(`${BASE_URL}/request/get?id=${id}&cycle=${semester}`, {
                method: "GET",
                headers: { "Content-Type": "application/json" }
            })

            if (!response.ok) {
                throw new Error("Error al obtener el usuario")
            }
            return response.json()

        } catch (error) {
            console.error("Error en la llamada al servidor: ", error)
            return null
        }
    },

    getCourses: async () => {
        try {
            const response = await fetch(`${BASE_URL}/data/courses/all`, {
                method: "GET"
            })

            if (!response) {
                throw new Error("Error al obtener los cursos")
            }
            return response.json();

        } catch (error) {
            console.error("Error en la llamada al servidor: ", error)
            return null
        }
    },

    getSemesters: async () => {
        try {
            const response = await fetch(`${BASE_URL}/data/semesters/all`, {
                method: "GET"
            })

            if (!response) {
                throw new Error("Error al obtener los semestres")
            }

            return response.json()

        } catch (error) {
            console.error("Error en la llamada al servidor: ", error)
            return null
        }
    },

    getRequests: async (querys) => {

        try {
            const response = await fetch(`${BASE_URL}/admin/all?${querys}`, {
                method: "GET",
            })

            if (!response) {
                throw new Error("Error al obtener las solicitudes")
            }

            return response.json()

        } catch (error) {
            console.error("Error en la llamada al servidor: ", error)
            return null
        }
    },
    getAdminData: async (id) => {

        try {
            const response = await fetch(`${BASE_URL}/data/user?id=${id}`)

            if (!response) {
                throw new Error("Error al encontrar al usuario administrador")
            }

            return response.json()

        } catch (error) {
            console.error("Error en la llamada al servidor: ", error)
            return null
        }
    },
    updateUserData: async (data) => {
        try {
            const response = await fetch(`${BASE_URL}/request/update`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            })

            if (!response.ok) {
                throw new Error("Error al actualizar los registros del usuario")
            }

            return response.json();
        } catch (error) {
            console.error("Error en la llamada al servidor: ", error)
            return null;
        }
    },
    acceptRequest: async (data) => {
        console.log(data)
        try {

            const response = await fetch(`${BASE_URL}/admin/aproved`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            })

            if (!response.ok) {
                throw new Error("Error al enviar la aceptación de solicitud")
            }

            return response.json();

        } catch (error) {
            console.error("Error en la llamada al servidor: ", error)
            return null;
        }
    }

}

export default api