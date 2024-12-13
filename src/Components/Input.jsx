function Input({ change, value }) {
    return (
        <div className="ip-cont">
            <input onChange={change} value={value} type="text" name="num" id="numbers" />
        </div>
    );
}

export default Input;
