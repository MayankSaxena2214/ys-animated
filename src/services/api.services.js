
export const apiService={
    createContact:async function (contactData){
        const  response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(contactData),
            });
        return response;
    }
}