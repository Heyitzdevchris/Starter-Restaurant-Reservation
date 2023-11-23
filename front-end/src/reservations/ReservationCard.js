import React from "react";
import CancelReservationButton from "./CancelReservationButton";
import { Link } from "react-router-dom"
import "./ReservationCard.css";

function ReservationCard({ 
  reservation_id, 
  first_name, 
  last_name, 
  mobile_number, 
  reservation_date, 
  reservation_time, 
  people,
  status,
  setReservationsError,
  loadReservationsAndTables
}) {
    
  return (
    <div className="card h-100 w-100 mb-3">
      <h4 className="card-header d-flex justify-content-between align-items-center">
        {last_name}, {first_name}
        {/* Edit Button */}
        {status === "booked" && <Link to={`/reservations/${reservation_id}/edit`}  
          className="btn btn-outline-secondary">
            Edit
          </Link>}
      </h4>

      <div className="card-body">
        <h5 className="card-title">{reservation_time}, {reservation_date}</h5>
        <h6 className="card-subtitle mb-2 text-muted">Guests: {people}</h6>
        <h6 className="card-subtitle mb-2 text-muted">Mobile Number: {mobile_number}</h6>
      </div>

      <div 
        className="card-footer border-secondary text-secondary"
        id="resCardFooter">

        {/* Seat Button */}
        {status === "booked" &&
          <Link to={`/reservations/${reservation_id}/seat`}
            className="btn btn-secondary">
              Seat
          </Link>}

        {/* Status Badge */}
        <h5>
          <span 
            className="badge text-light"
            id="statusBadge"
            data-reservation-id-status={reservation_id}>
              {status}
          </span>
        </h5>

        {/* Cancel Reservation Button */}
        {status === "booked" &&
        <CancelReservationButton
          reservation_id={reservation_id}
          setReservationsError={setReservationsError}
          loadReservationsAndTables={loadReservationsAndTables}
        />}
      </div>
    </div>
  );
}

export default ReservationCard;