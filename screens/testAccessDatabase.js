let db;

const SignUpScreen = ({ navigation }) => {
    let [flatListItems, setFlatListItems] = useState([]);

    db = SQLite.openDatabase(
        {
        name: 'MathSaya-database.db',
        createFromLocation : "~MathSaya-database.db",
        }
    );
    
    useEffect(() => {
        db.transaction(tx => {
            tx.executeSql('SELECT * FROM table_users', [], (tx, results) => {  // sql query to get all table data and storing it in 'results' variable
                let len = results.rows.length;                          
                let users = [];    //creating empty array to store the rows of the sql table data
                console.log('mylength:' + len);
        
                //looping through each row in the table and storing it as object in the 'users' array
                for (let i = 0; i < results.rows.length; i++) {}
                    users.push(results.rows.item(i));
                setFlatListItems(users);
        
                //this.setState({ userList:users});         //setting the state(userlist) with users array which has all the table data
                
                
            });   
        });
    }, []);

    let listViewItemSeparator = () => {
        return (
          <View
            style={{
              height: 0.2,
              width: '100%',
              backgroundColor: '#808080'
            }}
          />
        );
    };

    let listItemView = (item) => {
        return ( 
            <View
                key={item.user_id}
                style={{ backgroundColor: 'white', padding: 20 }}>
                    <Text>Id: {item.user_id}</Text>
                    <Text>Name: {item.user_name}</Text>
                    <Text>Password: {item.user_password}</Text>
                    <Text>abcdefghjklmnopqrstuvwxyz</Text>
            </View>
        );
    };

    return(
        <SafeAreaView style={{ flex:1}} >
                <View style={styles.container}>
                    <View style={{ flex:1 }}>
                        <FlatList
                            data={flatListItems}
                            ItemSeparatorComponent={listViewItemSeparator}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) => listItemView(item)}
                        />
                    </View>
                    <Text>
                        I'm here bakit wala parin???
                    </Text>
                    <Text style={{ fontSize: 16, textAlign: 'center', color: 'grey' }}>
          www.edafait.com
        </Text>
                </View>
        </SafeAreaView>
    ); //end of return 
};

export default SignUpScreen;

const styles = StyleSheet.create ({
    container: {
        padding: 80,
        paddingTop: 40,
        backgroundColor: '#fefac0',
    },
})
