export default function Stats() {
  return (
    <div className="w-full border-y border-white/5 bg-black/50 py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto px-6">
        {[
          { label: 'LeetCode Problems', value: '1000+' },
          { label: 'Production Apps', value: '3+' },
          { label: 'Active Users', value: 'Thousands' }, // Derived from "Naam Jaap" resume notes
          { label: 'Degree', value: 'B.Tech CSE' },
        ].map((stat, i) => (
          <div key={i} className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</h3>
            <p className="text-sm text-secondary uppercase tracking-wider">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}