const PageNation = ({totalItem, limit, page, setPage, line, setLine}) => {
    const numPages = Math.ceil(totalItem/limit);
    const lineLimit = 3;
    const lastLine = Math.ceil(Math.ceil(totalItem / limit) / lineLimit);

    const goNext = () => {
        setLine(line + 1);
        setPage(line * lineLimit);
    }

    const goBefore = () => {
        setLine(line - 1);
        setPage(((line - 1) * lineLimit) - 1);
    }
    
    return (
        <div className="PageNation">
            {line > 1 ? <button onClick={() => goBefore()}>before</button> : <span></span>}
            {Array(lineLimit).fill().map((_,i) => {
                i = i + (lineLimit * (line - 1));
                if (i === page) {
                    return <span className="nowPage" key={i + 1}>{i + 1}</span>
                } else if (i < numPages) {
                    if (((line * lineLimit) - lineLimit) <= i && line * lineLimit > i) {
                        return (
                            <button
                                key={i + 1} 
                                onClick={() => setPage(i)}>
                                {i + 1}
                            </button>
                        )
                    } else {
                        return null
                    } 
                } else {
                    return null
                }
            })}
           {line < lastLine ? <button onClick={() => goNext()}>next</button> : <span></span>}
        </div>
    )
}

export default PageNation;