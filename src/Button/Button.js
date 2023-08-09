
function Button() {
    function clickMe(){
    alert ('Upload file');
}
    return (
<div>
    <button onClick={clickMe}> UPLOAD </button>
</div>
)
}
export default Button;