import GreetingForm from "../components/GreetingForm"
import ExplanationSection from "../components/ExplanationSection"

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Greeting App</h1>
      <div className="max-w-md mx-auto">
        <GreetingForm />
        <ExplanationSection />
      </div>
    </main>
  )
}