import './ContactCard.css'

function ContactCard({ name, img, msg, lastSeen }) {
    return (
        <li class="list-group-item-flush d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
                <div className="fw-bold">{name}</div>
                <a className="card" href="details.html">

                    <img src={img} alt="logo" width="215"></img>
                </a>
                <div className="container">
                    <div className="row">
                        <div className="col"> {msg} </div>
                        <span className="mid"> Last seen: </span>
                        <span className="small"> {lastSeen}</span>
                    </div>
                </div>
            </div>

            <span class="badge bg-primary rounded-pill">5 massages</span>
        </li>
    );
}

export default ContactCard;