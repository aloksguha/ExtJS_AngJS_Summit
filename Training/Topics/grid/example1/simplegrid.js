






function createSimpleGrid() {
  Ext.create('Ext.data.Store', {
    storeId: 'synerzipStore',
    fields: ['name', 'email', 'phone', 'doj'],
    data: {'employees': [
      { 'name': 'Pankaj', "email": "pankaj@synerzip.com", "phone": "234-234-5645", "doj": 'asd' },
      { 'name': 'Vinay', "email": "vinay@synerzip.com", "phone": "234-294-5645", "doj": 'asd' },
      { 'name': 'Nidhi', "email": "nidhi@synerzip.com", "phone": "234-134-5645", "doj": 'asd'  },
      { 'name': 'Wasim', "email": "wasim@synerzip.com", "phone": "234-234-5645", "doj": 'asd'  }
    ]},
    proxy: {
      type: 'memory',
      reader: {
        type: 'json',
        root: 'employees'
      }
    }
  });

  Ext.create('Ext.grid.Panel', {
    title: 'Synerzip',
    store: Ext.data.StoreManager.lookup('synerzipStore'),
    columns: [
      { text: 'Name', dataIndex: 'name' },
      { text: 'Email', dataIndex: 'email', flex: 1 },
      { text: 'Phone', dataIndex: 'phone' },
      { text: 'Date Of Joining', dataIndex: 'doj' }
    ],
    height: 200,
    width: 400,
    renderTo: Ext.getBody()
  });
}

//The onReady function is what we use to make our code wait until the document is ready.
Ext.onReady(function () {
  createSimpleGrid();
});