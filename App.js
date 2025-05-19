import React from 'react';
import { View, Text, TextInput, Button, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView style={{ padding: 20, marginTop: 40 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>TokBooster</Text>

      <Text style={{ marginTop: 20 }}>Login</Text>
      <TextInput placeholder="Email" style={{ borderWidth: 1, padding: 8, marginVertical: 5 }} />
      <TextInput placeholder="Password" secureTextEntry style={{ borderWidth: 1, padding: 8, marginBottom: 10 }} />
      <Button title="Login" onPress={() => {}} />

      <Text style={{ marginTop: 30, fontWeight: 'bold' }}>Manajemen Produk</Text>
      <TextInput placeholder="Nama Produk" style={{ borderWidth: 1, padding: 8, marginVertical: 5 }} />
      <TextInput placeholder="Harga" style={{ borderWidth: 1, padding: 8, marginVertical: 5 }} />
      <TextInput placeholder="Stok" style={{ borderWidth: 1, padding: 8, marginBottom: 10 }} />
      <Button title="Tambah Produk" onPress={() => {}} />

      <Text style={{ marginTop: 30, fontWeight: 'bold' }}>Jadwal Konten</Text>
      <TextInput placeholder="Tanggal & Jam" style={{ borderWidth: 1, padding: 8, marginVertical: 5 }} />
      <TextInput placeholder="Deskripsi Konten" style={{ borderWidth: 1, padding: 8, marginBottom: 10 }} />
      <Button title="Jadwalkan" onPress={() => {}} />
    </ScrollView>
  );
}
