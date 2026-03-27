import { useState } from 'react';
import { motion } from 'motion/react';
import { Brain, Radio, Target, Zap } from 'lucide-react';

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
            [SYSTEM] Awaiting statement...
          </div>
          <input 
            type="text" 
            placeholder="Broadcast to the Lattice..." 
            className="w-full mt-4 bg-neutral-800 border border-neutral-700 rounded-md p-2 text-sm"
          />
        </section>

        {/* Quantum Tracker */}
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
      </main>
    </div>
  );
}
