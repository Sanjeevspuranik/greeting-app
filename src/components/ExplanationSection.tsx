import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function ExplanationSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>How It Works</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {/* Input and Button Section */}
          <AccordionItem value="components">
            <AccordionTrigger>Components Overview</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-4 space-y-2">
                <li>
                  <strong>Input Field:</strong> Uses Shadcn UI Input component with proper validation and accessibility
                  features
                </li>
                <li>
                  <strong>Submit Button:</strong> Shadcn UI Button component with loading state handling
                </li>
                <li>
                  <strong>Greeting Display:</strong> Alert component shows the response clearly and accessibly
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* Server Action Section */}
          <AccordionItem value="server-actions">
            <AccordionTrigger>Server Action Processing</AccordionTrigger>
            <AccordionContent>
              The form submission is handled by a Next.js Server Action that:
              <ul className="list-disc pl-4 mt-2 space-y-2">
                <li>Receives the form data securely on the server</li>
                <li>Validates the input name</li>
                <li>Returns a personalized greeting message</li>
                <li>Handles the entire process without page refresh</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* Technical Details */}
          <AccordionItem value="technical">
            <AccordionTrigger>Technical Implementation</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-4 space-y-2">
                <li>Built with Next.js 15.1 and TypeScript</li>
                <li>Uses React Server Components for optimal performance</li>
                <li>Implements Shadcn UI for consistent design</li>
                <li>Fully responsive and accessible</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  )
}