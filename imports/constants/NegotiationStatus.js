// simplified from https://github.com/optune/meteor-model/blob/master/constants/BookingStatus.js

export default {
  PENDING: 'pending', // Booking in negotiation, not confirmed yet (tbc)
  CONFIRMED: 'confirmed', // Deal is settled and booking is confirmed
  DECLINED: 'declined', // Final: on party rejects the negotiation
};
