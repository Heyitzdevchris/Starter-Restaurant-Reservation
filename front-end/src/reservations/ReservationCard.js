import React from "react";
import CancelReservationButton from "./CancelReservationButton";
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
    <div className="card h-100 w-100 border-secondary mb-3">
      <h4 className="card-header d-flex justify-content-between align-items-center">
        {last_name}, {first_name}
        {/* Edit Button */}
        {status === "booked" && <a 
          type="button" 
          className="btn btn-outline-secondary"
          href={`/reservations/${reservation_id}/edit`}
        >
          Edit
        </a>}
      </h4>
      <div className="card-body">
        <h5 className="card-title">{reservation_time}, {reservation_date}</h5>
        <h6 className="card-subtitle mb-2 text-muted">Guests: {people}</h6>
        <h6 className="card-subtitle mb-2 text-muted">Mobile Number: {mobile_number}</h6>
      </div>
      <div 
        className="card-footer border-secondary text-secondary"
        id="resCardFooter"
        style={{textAlign: "right"}}
        >
        
        {/* Seat Button */}
        {status === "booked" &&
          <a 
            className="btn btn-secondary" 
            id="seatButton"
            href={`/reservations/${reservation_id}/seat`} 
            role="button">
            Seat
          </a>}

        {/* Status Badge */}
        <h5><span 
          className="badge text-light"
          id="statusBadge"
          data-reservation-id-status={reservation_id}>
            {status}
        </span></h5>
        {/* Cancel Reservation Button */}
        {status !== "cancelled" &&
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