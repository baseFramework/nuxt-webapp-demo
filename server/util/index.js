var util = {
    pagination: function (currentPage, pageSize, array) {
        var offset = (currentPage - 1) * pageSize;
        return (offset + pageSize >= array.length) ? array.slice(offset, array.length) : array.slice(offset, offset + pageSize);
    }
}

export default util