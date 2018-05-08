
import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.apache.kafka.clients.consumer.ConsumerRecords;
import org.apache.kafka.clients.consumer.KafkaConsumer;
import org.apache.kafka.common.serialization.StringDeserializer;
import org.apache.kafka.common.serialization.StringSerializer;

import java.util.Arrays;
import java.util.Properties;

/**
 * Created by schaud3 on 1/8/18.
 */
public class KafkaConsumerDemo {
    public static void main(String[] args) {
        Properties properties = new Properties();
        properties.setProperty("bootstrap.servers","192.168.99.100:9092");
        properties.setProperty("key.deserializer", StringDeserializer.class.getName());
        properties.setProperty("value.deserializer",StringDeserializer.class.getName());
        properties.setProperty("group.id","consumerDemo");
        properties.setProperty("enable.auto.commit","true");
        properties.setProperty("auto.commit.interval.ms","1000");
        properties.setProperty("auto.offset.reset","earliest");
        KafkaConsumer<String,String> kafkaConsumer = new KafkaConsumer<String, String>(properties);
        kafkaConsumer.subscribe(Arrays.asList("second_topic"));
        while(true) {
            ConsumerRecords<String, String> consumerRecords =  kafkaConsumer.poll(100);
            for (ConsumerRecord<String,String> consumerRecord: consumerRecords) {
                System.out.println("Partition: "+consumerRecord.partition());
                System.out.println("key: "+consumerRecord.key());
                System.out.println("value: "+consumerRecord.value());
                System.out.println("offset: "+consumerRecord.offset());
                System.out.println("***********************");
            }

        }

    }
}
