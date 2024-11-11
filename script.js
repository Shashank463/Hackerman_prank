function startHacking(e) {
  e.preventDefault();

  const name = document.getElementsByClassName("input")[0].value;
  if (!name)
    return alert("Enter Username")
  

  let a = [
    "Initialising hack program........",
    "Scanning networks for vulnerable systems........",
    "Hacking " + name + "........",
    "Attempting brute force on password........",
    "Password found for " + name + " : ***encrypted***........",
    "Accessing " + name + " account........",
    "Retrieving personal data........",
    "Decrypting stored files........",
    "Creating backdoor access to system........",
    "System compromised: Full control gained........",
    "Retrieving sensitive information........",
    "Password for account 'Email' retrieved: ***decrypted_password***........",
    "Password for account 'Banking' retrieved: ***decrypted_password***........",
    "Generating password for new account.........",
    "Password creation successful........",
    "Hacking complete. Disconnecting from the network........",
  ];

  let elem = document.getElementsByClassName("para")[0];
  console.log(elem);
  for (let i = 0; i < a.length; i++) {
    setTimeout(() => {
      elem.innerHTML += a[i] + "<br>";
    }, i * 3000);
  }
}



// a.setInterval(() => {
// }, 4000);

// async function hack() {
//     for (let i = 0; i < a.length; i++) {
//         return new Promise((resolve , reject) => {
//             setInterval (()=> {
//                 console.log(a[i]);
//                 resolve (success)
//             },3000)
//         })
//     }
// }
