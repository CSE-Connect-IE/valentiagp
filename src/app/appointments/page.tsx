import type { Metadata } from "next";
import Button from "@/components/Button";
import Card from "@/components/Card";

export const metadata: Metadata = {
  title: "Appointments | Valentia GP",
  description:
    "Information on how to book an appointment at Valentia GP in Cahersiveen, our policies, and what to expect.",
};

export default function AppointmentsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Book an Appointment
      </h1>
      <p className="text-gray-700 mb-8">
        We are here to help you with your healthcare needs. Please find below
        the information on how to schedule an appointment with us.
      </p>

      <Card title="Booking by Phone" className="mb-8">
        <p className="text-gray-700 mb-4">
          The easiest way to book an appointment is by calling our reception
          desk during opening hours. Our staff will be happy to assist you in
          finding a suitable time.
        </p>
        <Button tel="0669473555" variant="primary" size="lg">
          Call to Book: 066 9473555
        </Button>
      </Card>

      <Card title="Appointment Policies" className="mb-8">
        <h3 className="text-xl font-semibold text-gray-700 mb-2">
          Cancellations
        </h3>
        <p className="text-gray-700 mb-4">
          If you need to cancel or reschedule your appointment, please contact
          us at least 24 hours in advance so we can offer the slot to another
          patient.
        </p>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">
          What to Bring
        </h3>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <p className="text-gray-700">
          Please bring your medical card (if applicable) and a list of any
          current medications you are taking. For new patients, please arrive a
          few minutes early to complete registration forms if you haven't done
          so already.
        </p>
      </Card>

      <Card title="Urgent Appointments">
        <p className="text-gray-700">
          If you have an urgent medical issue, please call us as early as
          possible in the day. We keep a limited number of slots for same-day
          urgent appointments. For emergencies outside of clinic hours, please
          contact SouthDoc or visit your nearest Emergency Department.
        </p>
      </Card>
    </div>
  );
}
