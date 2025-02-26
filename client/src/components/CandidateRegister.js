import CandidateDisplay from "./CandidateDisplay";
function CandidateRegister({state,account}) {

  async function register(event){
    event.preventDefault();
    const {contract}=state;
    const name=document.querySelector("#name").value ;
    const party=document.querySelector("#party").value;
    const age=document.querySelector("#age").value;
    const gender=document.querySelector("#gender").value;
    try{
      await contract.methods.candidateRegister(name,party,age,gender).send({
        from:account,
        gas:"10000000"
      })
      alert("Register is successful");
      window.location.reload();
    }
    catch(error){
      alert(error);

    }

  }
  return (
    <div>
      <form className="form" onSubmit={register}>
        <label className="label1" htmlFor="name">
          Name:
        </label>
        <input className="innerBoxCand" type="text" id="name"></input>

        <label className="label1" htmlFor="party">
          Party:
        </label>
        <input className="innerBoxCand" type="text" id="party"></input>

        <label className="label1" htmlFor="age">
          Age:
        </label>
        <input className="innerBoxCand" type="text" id="age"></input>

        <label className="label1" htmlFor="gender">
          Gender:
        </label>
        <input className="innerBoxCand" type="text" id="gender"></input>

        <button className="regBtn" type="submit">
          Register
        </button>
      </form>
      <CandidateDisplay state={state}></CandidateDisplay>
    </div>
  );
}
export default CandidateRegister;
