export async function getPuppies() {
          try {
            const response = await fetch("http://dev-puppies-api.test/api/puppies");

            if (!response.ok) {
              const errorData = await response.json();
              throw errorData;
            }

            const {data} = await response.json();
            return data;
            
          } catch (error) {
            console.error(error);
            throw error;
          }
        }