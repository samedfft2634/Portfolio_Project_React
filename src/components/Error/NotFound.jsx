import { useNavigate } from "react-router-dom";


const NotFound = () => {
  const nav = useNavigate()
	return (
		<div>
			<h1>This page is not defined</h1>
      <button onClick={()=> nav("/") }>
        Home
      </button>
		</div>
	);
};

export default NotFound;
