export function Stats() {
  const stats = [
    { label: 'Active Users', value: '50K+' },
    { label: 'Projects Completed', value: '100K+' },
    { label: 'Countries Served', value: '120+' },
    { label: 'Customer Satisfaction', value: '98%' }
  ];

  return (
    <div className="bg-white border-y border-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
