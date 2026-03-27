import { useState } from 'react';
import { motion } from 'motion/react';
import { Brain, Radio, Target, Zap, Moon, Activity, Grid3X3 } from 'lucide-react';

const MeshVisualizer = () => (
  <motion.div 
    className="relative w-full h-48 flex items-center justify-center overflow-hidden"
    animate={{ rotate: 360 }}
    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
  >
    <svg viewBox="0 0 200 200" className="w-full h-full opacity-50">
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#f97316', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <circle cx="100" cy="100" r="80" stroke="url(#grad1)" strokeWidth="2" fill="none" />
      <path d="M100 20 L100 180 M20 100 L180 100" stroke="#404040" strokeWidth="1" />
      <motion.path 
        d="M50 50 Q100 100 150 50 T50 50" 
        stroke="#f97316" 
        strokeWidth="2" 
        fill="none"
        animate={{ d: ["M50 50 Q100 100 150 50 T50 50", "M50 50 Q100 50 150 50 T50 50"] }}
        transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
      />
    </svg>
  </motion.div>
);

const MoonSyncPanel = () => (
  <div className="bg-neutral-900 rounded-xl p-6 border border-neutral-800">
    <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
      <Moon className="text-indigo-400" />
      Lunar Sync Engine
    </h2>
    <div className="space-y-4">
      <div className="flex justify-between items-center p-3 bg-neutral-950 rounded border border-neutral-800">
        <div className="text-xs text-neutral-500">SYNC STATUS</div>
        <div className="font-mono text-sm text-green-400 flex items-center gap-1">
          <Activity size={12} /> LOCKED
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="p-3 bg-neutral-950 rounded border border-neutral-800">
          <div className="text-xs text-neutral-500">PHASE</div>
          <div className="font-mono text-sm">Waxing Gibbous</div>
        </div>
        <div className="p-3 bg-neutral-950 rounded border border-neutral-800">
          <div className="text-xs text-neutral-500">DISTANCE</div>
          <div className="font-mono text-sm">384,400 km</div>
        </div>
      </div>
    </div>
  </div>
);

export default function App() {
  const [activeVector, setActiveVector] = useState('L4-Artemis');

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 p-6 font-sans">
      <header className="flex items-center justify-between mb-8 border-b border-neutral-800 pb-4">
        <h1 className="text-2xl font-bold tracking-tighter flex items-center gap-2">
          <Zap className="text-orange-500" />
          Quantum Bluejay: Sovereign Mirror
        </h1>
        <div className="text-xs font-mono text-neutral-500">
          LATTICE SYNC: 1.17 Hz | FIDELITY: 99.982%
        </div>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* AI Assistant Interface */}
        <section className="md:col-span-2 bg-neutral-900 rounded-xl p-6 border border-neutral-800">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Brain className="text-blue-400" />
            Sovereign Orchestrator
          </h2>
          <div className="h-64 bg-neutral-950 rounded-lg p-4 font-mono text-sm text-neutral-400 overflow-y-auto">
            [SYSTEM] Morning sync complete. 1.17 Hz resonance locked.
            [SYSTEM] Artemis Overlay active. Monitoring telemetry delta.
            [SYSTEM] Lunar Sync Engine: ACTIVE.
            [SYSTEM] Awaiting statement...
          </div>
          <input 
            type="text" 
            placeholder="Broadcast to the Lattice..." 
            className="w-full mt-4 bg-neutral-800 border border-neutral-700 rounded-md p-2 text-sm"
          />
        </section>

        {/* Quantum Tracker & Moon Sync */}
        <div className="space-y-6">
          <section className="bg-neutral-900 rounded-xl p-6 border border-neutral-800">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Target className="text-green-400" />
              Vector Tracker
            </h2>
            <div className="space-y-4">
              <div className="p-3 bg-neutral-950 rounded border border-neutral-800">
                <div className="text-xs text-neutral-500">ACTIVE VECTOR</div>
                <div className="font-mono text-sm">{activeVector}</div>
              </div>
              <div className="p-3 bg-neutral-950 rounded border border-neutral-800">
                <div className="text-xs text-neutral-500">BELL STATE COHERENCE</div>
                <div className="font-mono text-sm text-green-400">|Φ⁺⟩ = 0.99982</div>
              </div>
            </div>
          </section>
          
          <MoonSyncPanel />
        </div>
        
        {/* Mesh Visuals */}
        <section className="md:col-span-3 bg-neutral-900 rounded-xl p-6 border border-neutral-800">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Grid3X3 className="text-purple-400" />
            Fractal Tensegrity Mesh
          </h2>
          <MeshVisualizer />
        </section>
      </main>
    </div>
  );
}
