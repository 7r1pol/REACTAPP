import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function SearchForm({ closeSideBar}) {
    const resultType = [
        "articles",
        "uriWgtList",
        "langAggr",
        "timeAggr",
        "sourceAggr",
        "sourceExAggr",
        "authorAggr",
        "keywordAggr",
        "locAggr", 
        "conceptAggr",
        "conceptGraph",
        "categoryAggr",
        "dateMentionAggr",
        "sentimentAggr",
        "recentActivityArticles",
    ];
    const articlesSortBy = [
        'date',
        'rel',
        'sourceImportance',
        'sourceAlexaGlobalRank',
        'sourceAlexaCountryRank',
        'socialScore',
        'facebookShares',

    ];
    const dataType = ['news','pr','blog',];
        
        
    const handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            keyword: event.target.keyword.value,
            resultType: event.target.keyword.value,
            articlesSortBy: event.target.articlesSortBy.value,
            dataType: [...event.target.dataType]
            .filter(e => e.checked)
            .map(d => d.value),

        };

        console.log('data', data);

        closeSideBar();
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Label>Keywords</Form.Label>
                <Form.Control type="text" name="keyword" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Result Type</Form.Label>
                <Form.Select name="resultType">
                    {resultType.map(type => (
                        <option value={type} key={type}>
                            {type}
                            </option>
                    ))}

                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Articles Sort By</Form.Label>
                <Form.Select name="articlesSortBy">
                    {articlesSortBy.map(type => (
                        <option value={type} key={type}>{type}</option>
                    ))}

                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Data type</Form.Label>
                {dataType.map(type => (
                    <Form.Check type="checkbox" label={type} key={type} name="dataType" Value={type}/>
                        
                        
                ))}
            </Form.Group>
        
            <Button variant="primary" onClick={closeSideBar}>
                 Close side bar
            </Button>
        </Form>
    );
}

export default SearchForm;
