import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";

export default function Home() {
  // Hardcoded 6 books
  const books = [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      status: "Available",
      rating: 4.5,
      image: "https://covers.openlibrary.org/b/id/8228691-L.jpg",
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      status: "Unavailable",
      rating: 4.8,
      image: "https://covers.openlibrary.org/b/id/7222246-L.jpg",
    },
    {
      id: 3,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      status: "Available",
      rating: 4.9,
      image: "https://covers.openlibrary.org/b/id/8228691-L.jpg",
    },
    {
      id: 4,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      status: "Unavailable",
      rating: 4.7,
      image: "https://covers.openlibrary.org/b/id/8091016-L.jpg",
    },
    {
      id: 5,
      title: "Moby Dick",
      author: "Herman Melville",
      status: "Available",
      rating: 4.2,
      image: "https://covers.openlibrary.org/b/id/5552016-L.jpg",
    },
    {
      id: 6,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      status: "Unavailable",
      rating: 4.3,
      image: "https://covers.openlibrary.org/b/id/8231856-L.jpg",
    },
  ];

  return (
    <ScrollView className="flex-1 bg-white px-4 py-6">
      <Text className="text-2xl font-bold text-green-700 mb-6 text-center">
        Library Books
      </Text>

      {books.map((book) => (
        <View
          key={book.id}
          className="flex-row bg-gray-100 rounded-xl mb-4 p-3 items-center"
        >
          <Image
            source={{ uri: book.image }}
            style={{ width: 60, height: 90, borderRadius: 6 }}
          />
          <View className="flex-1 ml-4">
            <Text className="font-bold text-lg">{book.title}</Text>
            <Text className="text-gray-600">{book.author}</Text>
            <Text className="text-gray-800 mt-1">Rating: {book.rating}</Text>
          </View>
          <TouchableOpacity
            className={`px-4 py-2 rounded-xl ${
              book.status === "Available" ? "bg-green-700" : "bg-gray-400"
            }`}
            disabled={book.status !== "Available"}
            onPress={() =>
              alert(
                book.status === "Available"
                  ? `You borrowed "${book.title}"!`
                  : "Book unavailable"
              )
            }
          >
            <Text className="text-white font-semibold">
              {book.status === "Available" ? "Borrow" : "Unavailable"}
            </Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}
