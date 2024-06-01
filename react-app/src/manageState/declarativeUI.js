// import { useState } from 'react';

// export default function Form33() {
//   const [answer, setAnswer] = useState('');
//   const [error, setError] = useState(null);
//   const [status, setStatus] = useState('typing');

//   if (status === 'success') {
//     return <h1>That's right!</h1>
//   }

//   async function handleSubmit(e) {
//     e.preventDefault();
//     setStatus('submitting');
//     try {
//       await submitForm(answer);
//       setStatus('success');
//     } catch (err) {
//       setStatus('typing');
//       setError(err);
//     }
//   }

//   function handleTextareaChange(e) {
//     setAnswer(e.target.value);
//   }

//   return (
//     <>
//       <h2>City quiz</h2>
//       <p>
//         In which city is there a billboard that turns air into drinkable water?
//       </p>
//       <form onSubmit={handleSubmit}>
//         <textarea
//           value={answer}
//           onChange={handleTextareaChange}
//           disabled={status === 'submitting'}
//         />
//         <br />
//         <button disabled={
//           answer.length === 0 ||
//           status === 'submitting'
//         }>
//           Submit
//         </button>
//         {error !== null &&
//           <p className="Error">
//             {error.message}
//           </p>
//         }
//       </form>
//     </>
//   );
// }

// function submitForm(answer) {
//   // Pretend it's hitting the network.
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let shouldError = answer.toLowerCase() !== 'lima'
//       if (shouldError) {
//         reject(new Error('Good guess but a wrong answer. Try again!'));
//       } else {
//         resolve();
//       }
//     }, 1500);
//   });
// }




import { useState } from "react";

export default function DeclarativeUi() {
  const [answer, setAnswer] = useState("");
  const [status, setStatus] = useState("typing");
  const [error, setError] = useState(null);

  if (status === "success") {
    return <h1>That's right!</h1>;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    try {
      await submitForm(answer);
      setStatus("success");
    } catch (e) {
      setStatus("typing");
      setError(e);
    }
  }
  function handleTextarea(e) {
    setAnswer(e.target.value);
  }

  return (
    <>
      <h3>City Quiz</h3>

      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>

      <form onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={handleTextarea}
          disabled={status === "submitting"}
        />

        <br />
        <button disabled={status === "submitting" || answer.length === 0}>
          Submit
        </button>

        {error!==null &&
        <p className="Error">{error.message}
            </p>
            }
      </form>
    </>
  );
}

function submitForm(answer) {
 return new Promise((resolve, reject) => {
    setTimeout(() => {
      let shouldError = answer.toLowerCase() !== "lima"
      if (shouldError) {
        reject(new Error("Good guess but wrong. Try again!"));
      } else {
        resolve();
      }
    }, 1500);
  });
}
