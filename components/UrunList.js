import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, FlatList, ActivityIndicator } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const UrunList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Hata:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" style={styles.loading} />;
  }

  const renderItem = ({ item }) => (
    <View style={styles.productItem}>
      {/* Ürün Resmi */}
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <View style={styles.productInfo}>
        {/* Ürün Başlığı */}
        <Text style={styles.productTitle} numberOfLines={2}>{item.title}</Text>
        
        {/* Derecelendirme */}
        <View style={styles.productRating}>
          <Text style={styles.ratingText}>
            {item.rating && item.rating.rate ? item.rating.rate.toFixed(1) : "N/A"}
          </Text>
          <AntDesign name="staro" size={14} color="#f0a500" />
        </View>
      </View>
      
      {/* Fiyat */}
      <Text style={styles.productPrice}>
        {item.price ? `${item.price.toFixed(2)} TL` : "Fiyat Bilgisi Yok"}
      </Text>
    </View>
  );

  return (
    <FlatList
      data={products}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.productList}
    />
  );
};

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  productList: {
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  productItem: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingVertical: 12,
    paddingHorizontal: 10,
  },
  productImage: {
    width: 60,
    height: 60,
    resizeMode: "contain",
    marginRight: 15,
  },
  productInfo: {
    flex: 1,
    justifyContent: "center",
    paddingRight: 10,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
  },
  productRating: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  ratingText: {
    fontSize: 14,
    color: "#555",
    marginRight: 3,
  },
  productPrice: {
    fontSize: 16,
    color: "#FF5722",
    fontWeight: "bold",
    alignSelf: "center",
    marginLeft: 'auto',
  },
});

export default UrunList;