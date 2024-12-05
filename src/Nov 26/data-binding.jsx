export function DataBinding(){
    var userName="John";
    var city="Hyd";
    return(
        <div className="container-fluid">
        <h2>Hello ! {userName} </h2>
        <input type="text" value={userName} />
        <select value={city}>
            <option value="-1">Select City</option>
            <option value="Chennai">Chennai</option>
            <option value="Delhi">Delhi</option>
            <option value="Hyd">Hyd</option>
        </select>
    </div>
    )
}