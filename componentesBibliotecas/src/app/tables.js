import * as React from 'react';
import { DataTable, Appbar, Button } from 'react-native-paper';
import { View } from 'react-native';
import { router } from 'expo-router';

export default function App() {
    const [page, setPage] = React.useState(0);
    const [numberOfItemsPerPageList] = React.useState([2, 3, 4]);
    const [itemsPerPage, onItemsPerPageChange] = React.useState(
        numberOfItemsPerPageList[0]
    );

    const [items] = React.useState([
        {
            key: 1,
            name: 'a',
            calories: 356,
            fat: 16,
        },
        {
            key: 2,
            name: 'b',
            calories: 262,
            fat: 16,
        },
        {
            key: 3,
            name: 'c',
            calories: 159,
            fat: 6,
        },
        {
            key: 4,
            name: 'd',
            calories: 305,
            fat: 3.7,
        },
        {
            key: 5,
            name: 'e',
            calories: 356,
            fat: 16,
        },
        {
            key: 6,
            name: 'f',
            calories: 262,
            fat: 16,
        },
        {
            key: 7,
            name: 'g',
            calories: 159,
            fat: 6,
        },
        {
            key: 8,
            name: 'h',
            calories: 305,
            fat: 3.7,
        },
    ]);

    const from = page * itemsPerPage;
    const to = Math.min((page + 1) * itemsPerPage, items.length);

    React.useEffect(() => {
        setPage(0);
    }, [itemsPerPage]);

    return (
        <View>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => router.navigate('appBar')} />
                <Appbar.Content title="Tabela" />
            </Appbar.Header>
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>Dessert</DataTable.Title>
                    <DataTable.Title numeric>Calories</DataTable.Title>
                    <DataTable.Title numeric>Fat</DataTable.Title>
                </DataTable.Header>

                {items.slice(from, to).map((item) => (
                    <DataTable.Row key={item.key}>
                        <DataTable.Cell>{item.name}</DataTable.Cell>
                        <DataTable.Cell numeric>{item.calories}</DataTable.Cell>
                        <DataTable.Cell numeric>{item.fat}</DataTable.Cell>
                    </DataTable.Row>
                ))}

                <DataTable.Pagination
                    page={page}
                    numberOfPages={Math.ceil(items.length / itemsPerPage)}
                    onPageChange={(page) => setPage(page)}
                    label={`${from + 1}-${to} of ${items.length}`}
                    numberOfItemsPerPageList={numberOfItemsPerPageList}
                    numberOfItemsPerPage={itemsPerPage}
                    onItemsPerPageChange={onItemsPerPageChange}
                    showFastPaginationControls
                    selectPageDropdownLabel={'Rows per page'}
                />
            </DataTable>
            <Button icon="star" mode="contained" onPress={() => router.navigate('menuLateral')}>
        Próximo
      </Button>
        </View>
    );
};

