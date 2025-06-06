import { Button } from "@/components/ui/button"

export function CallToAction() {
  return (
    <section className="bg-gradient-to-r from-teal-500 to-blue-500 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Ready to Experience Quality Healthcare?</h2>
        <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
          Join the many families who trust Valentia GP for their healthcare needs. Book your appointment today or
          request your prescription online.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/appointments" variant="outline" size="lg">
            Book Appointment
          </Button>
          <Button tel="0669473555" variant="outline" size="lg">
            Call Us: 066 947 3555
          </Button>
        </div>
      </div>
    </section>
  )
}
