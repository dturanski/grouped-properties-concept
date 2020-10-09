var METADATA
var INCLUDED=[
    "org.springframework.cloud.fn.supplier.s3.AwsS3SupplierProperties",
    "org.springframework.cloud.fn.common.file.FileConsumerProperties",
    "org.springframework.cloud.fn.common.aws.s3.AmazonS3Properties", 
    "org.springframework.cloud.fn.common.metadata.store.MetadataStoreProperties", 
    "org.springframework.cloud.fn.common.metadata.store.MetadataStoreProperties$Gemfire", 
    "org.springframework.cloud.fn.common.metadata.store.MetadataStoreProperties$Redis", 
    "org.springframework.cloud.fn.common.metadata.store.MetadataStoreProperties$DynamoDb", 
    "org.springframework.cloud.fn.common.metadata.store.MetadataStoreProperties$Jdbc", 
    "org.springframework.cloud.fn.common.metadata.store.MetadataStoreProperties$Zookeeper", 
    "org.springframework.cloud.fn.common.metadata.store.MetadataStoreProperties$Mongo",
    "org.springframework.cloud.aws.autoconfigure.context.properties.AwsCredentialsProperties",
    "org.springframework.cloud.aws.autoconfigure.context.properties.AwsS3ResourceLoaderProperties",
    "org.springframework.cloud.aws.autoconfigure.context.properties.AwsSRegionProperties",
    "org.springframework.cloud.aws.autoconfigure.context.properties.AwsS3ResourceLoaderProperties",
    "org.springframework.cloud.aws.autoconfigure.context.properties.AwsStackProperties",
    "org.springframework.cloud.fn.filter.FilterFunctionProperties",
    "org.springframework.cloud.fn.header.enricher.HeaderEnricherFunctionProperties",
    "org.springframework.cloud.fn.spel.SpelFunctionProperties",
    "org.springframework.cloud.fn.task.launch.request.TaskLaunchRequestFunctionProperties"
];



function properties_init(metadata) {
    METADATA = metadata;
}

function groups() {
    var g = []
    METADATA.groups.forEach(function(group) {
        if (INCLUDED.includes(group.type)) {
            add_properties_to_group(group)
            g.push(group)
        }
    });
   return g;
}

function add_properties_to_group(group) {
  var props = [];
  METADATA.properties.forEach(function(property) {
     if (property.sourceType == group.type) {
         props.push(property)
     }
  });
  group.properties = props;

}
