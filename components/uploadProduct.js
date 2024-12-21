import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import axios from "axios";

export default function uploadProduct({ navigation }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const uploadProduct = async () => {
    try {
      const response = await axios.post("https://product-app-server.vercel.app/api/products", {
        name,
        description,
      });
      Alert.alert("Success", response.data.message);
      setName("");
      setDescription("");
    } catch (error) {
      Alert.alert("Error", "Could not upload product");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Product Name</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Enter product name"
      />
      <Text style={styles.label}>Description</Text>
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={setDescription}
        placeholder="Enter product description"
      />
      <Button title="Upload Product" onPress={uploadProduct} />
      <Button
        title="View Products"
        onPress={() => navigation.navigate("Show Products")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    marginVertical: 10,
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
});
