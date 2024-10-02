const ChartPage = () => {
  return (
    <div className='chart-body'>
      <div className='item-column flex-[2]'>
        <div className='card-chart h-[170px]'>{/* <ProgressCircular /> */}</div>
        <div className='card-chart h-[170px]'></div>
      </div>
      <div className='item-column flex-[2]'>
        <div className='card-chart h-[352px]'></div>
      </div>
      <div className='item-column flex-[4]'>
        <div className='card-chart h-[352px]'></div>
      </div>
      <div className='item-column flex-[4]'>
        <div className='card-chart h-[352px]'></div>
      </div>
    </div>
  );
};

export default ChartPage;
