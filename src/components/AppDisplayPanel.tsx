const AppDisplayPanel = () => {

    const items = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

  return (
    <div className="
        flex
        flex-row
        flex-wrap
        mt-10
        w-[90%]
        h-[80%]
        overflow-auto
        thin-scrollbar
        justify-center
    ">
        {
            items.map(item => {
                return <div className="
                            flex
                            w-72
                            h-60
                            m-2
                            items-center
                            justify-center
                            font-serif
                            font-light
                            rounded-3xl
                            shadow-sm
                            shadow-slate-500
                            border-2
                            border-slate-200
                        ">
                            API Request Box
                        </div>
            })
        }
        
    </div>
  )
}

export default AppDisplayPanel;