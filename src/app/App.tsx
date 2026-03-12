import GameCanvas from "../components/scene/GameCanvas";
import HUD from "../components/ui/HUD";

export default function App() {
  return (
    <div className="w-full h-screen bg-[#1F1F1F] relative">
      <GameCanvas />
      <HUD />
    </div>
  );
}
