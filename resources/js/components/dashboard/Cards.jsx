//import React
import React from "react";

//import Link
import { Link } from "@inertiajs/inertia-react";

const formatDateTime = (dateTime) => {
    const date = new Date(dateTime);
    const options = {
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
    };
    const formattedDateTime = date.toLocaleString("en-US", options);
    return formattedDateTime;
};

const Cards = ({ cardsItem }) => {
    const items = cardsItem.map((card, index) => (
        <div key={index} className="col-3 mt-4">
            <div className="card" style={{ width: "18rem" }}>
                <img src={card.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{card.title}</h5>
                    <p className="card-text">
                        {formatDateTime(card.created_at)}
                    </p>
                    <a href={"./detail/" + card.id} className="btn btn-primary">
                        Detail
                    </a>
                    <a
                        className={
                            card.like.is_liked
                                ? "ms-2 btn btn-danger"
                                : "ms-2 btn btn-outline-danger"
                        }
                        href={"./like/" + card.id}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-heart me-1"
                            viewBox="0 0 16 16"
                        >
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                        </svg>
                        {card.like.count}
                    </a>
                </div>
            </div>
        </div>
    ));

    return (
        <div className="row justify-content-center">
            {cardsItem.length > 0 ? items : "no items"}
        </div>
    );
};

export default Cards;
