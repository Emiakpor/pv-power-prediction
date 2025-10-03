import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  header: {
    padding: 20,
    backgroundColor: "#4f6d7a",
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#ddd",
    marginTop: 5,
  },
  container: {
    flexGrow: 1,
    padding: 20,
    paddingBottom: 40,
    backgroundColor: "#f7f7f7",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -10, // overlap header slightly
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
    marginTop: 10,
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: "#fff",
  },
  buttonContainer: {
    marginTop: 30,
    borderRadius: 8,
    overflow: "hidden",
  },
});
