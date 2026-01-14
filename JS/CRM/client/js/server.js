 export async function PostPeapl(client) {
     const response = await fetch('http://localhost:3000/api/clients', {
         method: 'POST',
         headers: {
             'Content-Type': 'application/json'
         },
         body: JSON.stringify(client)
     });
     const data = await response.json();
     console.log(data);
 }

 export async function getPeapl() {
     const response = await fetch('http://localhost:3000/api/clients');
     const result = await response.json();
     console.log(result);
     return result
 }

 export async function deleteClientServer(id) {
     const response = await fetch(`http://localhost:3000/api/clients/${id}`, {
         method: 'DELETE',
     });

 }

 export async function editClientServer(client, id) {
     const response = await fetch(`http://localhost:3000/api/clients/${id}`, {
         method: 'PATCH',
         headers: {
             'Content-Type': 'application/json'
         },
         body: JSON.stringify(client)
     });

     const data = await response.json();
     console.log(data);
 }


 export async function findClint(value) {
     const response = await fetch(`http://localhost:3000/api/clients?search=${value}`, {
         method: 'GET',
     });
     const result = await response.json();

     return result;
 }
