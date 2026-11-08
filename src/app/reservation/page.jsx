import { BookingFrame } from '../../components/booking-frame';
import { SiteHeader } from '../../components/site-header';

export const metadata = { title: 'Reservar mesa' };

export default function ReservationPage() {
  return (
    <>
      <SiteHeader reservation />
      <BookingFrame />
    </>
  );
}
