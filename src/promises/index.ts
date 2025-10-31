// Basic Promise (Classic Way)
const fetchUsername = (userId: number, delay: number): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId === 1) {
        resolve("Anna Liebert");
      } else {
        reject(new Error("User not found!!!"));
      }
    }, delay);
  });
};

console.log("Fetching Data...");

// change the value to 2 if you want to see failure operation
fetchUsername(1, 2000)
  .then((res) => console.log(`username : ${res.toUpperCase()}`))
  .catch((err) => console.log(`Oopss Sorry ${err}`))
  .finally(() => console.log("Operation Done✅"));

// Promise With Async (The Modern Way)
const displayUsername = async (id: number) => {
  try {
    console.log("Fecthing User...");
    // we used the same function
    const name: string = await fetchUsername(id, 4000);
    console.log(`name : ${name.toUpperCase()}`);
  } catch (error) {
    console.log(`Oopss ${error}`);
  } finally {
    console.log("Fecth Operation Complete✅");
  }
};

// change the value to 1 if you want to see success operation
displayUsername(2);
