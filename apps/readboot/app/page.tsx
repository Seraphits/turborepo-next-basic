import { Button } from "@repo/ui/src/components/Button/Button";

export default function Home() {
  return (
    <div style={{ display: 'flex', gap: '20px', padding: '50px', backgroundColor: '#f0f0f0', minHeight: '100vh' }}>
      {/* 1. Default Button */}
      <Button onClick={() => alert('Clicked!')}>
        Hover Me
      </Button>

      {/* 2. Custom Message Button */}
      <Button topText="Read" bottomText="Boot">
        Start Reading
      </Button>
    </div>
  );
}
