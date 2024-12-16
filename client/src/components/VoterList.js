 import { useEffect,useState } from "react";
 function VoterList({state}) {
  const [voterlist,setVoterList]=useState([]);
  useEffect(()=>{
    const {contract}=state;
    async function listDisplay(){
      const voterlist=await contract.methods.voterList().call();
      
       setVoterList(voterlist);
    }
    contract && listDisplay();
  },[state]);
  return (
    <table>
      <tbody>
        {voterlist.map((voter,index)=>{
          return(<tr key={index}>
            <td>{voter.voterId}</td>
            <td>{voter.name}</td>
            <td>{voter.candidateId}</td>
            <td>{voter.voteCandidateId}</td>
          </tr>)
        })}
      </tbody>
    </table>
    )

}
export default VoterList;
