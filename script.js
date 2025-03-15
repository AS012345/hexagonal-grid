body {
    font-family: Arial, sans-serif;
    text-align: center;
    direction: rtl;
    margin: 0;
    padding: 20px 0;
}
.grid-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
}
.row {
    display: flex;
    justify-content: center;
    gap: 5px;
    margin-top: -20px;
}
 .row:nth-child(odd) {
            margin-left: 90px; /* إزاحة الصفوف الفردية */
        }
.cell {
    width: 80px;
    height: 80px;
    background: #f5f5f5;
    border: 2px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.3s;
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
}
.green { background: green; color: white; }
.orange { background: orange; color: white; }
.side-cell {
    background: orange !important;
    cursor: default;
}
.top-bottom-cell {
    background: green !important;
    cursor: default;
}
.button {
    margin-top: 40px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
}
