import React from 'react';


const DemoList = ({daylist}) => {

    return (
        <div>
            {daylist.map(e =>
                <h1 key={e.id}>{e.id} - {e.body}</h1>
            )}
        </div>
    );
};

export default DemoList;